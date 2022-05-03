module.exports = async function (context, req) {
  const date = "2022-05-03T22:11:07.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

