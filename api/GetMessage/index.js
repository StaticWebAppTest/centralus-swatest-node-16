module.exports = async function (context, req) {
  const date = "2022-10-28T14:19:39.896Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

