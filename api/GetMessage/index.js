module.exports = async function (context, req) {
  const date = "2022-04-19T09:10:54.391Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

