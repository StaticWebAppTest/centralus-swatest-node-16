module.exports = async function (context, req) {
  const date = "2022-10-21T18:19:39.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

