module.exports = async function (context, req) {
  const date = "2022-10-25T18:38:42.613Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

