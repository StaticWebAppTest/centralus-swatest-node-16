module.exports = async function (context, req) {
  const date = "2022-05-03T11:11:16.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

