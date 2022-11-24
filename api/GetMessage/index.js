module.exports = async function (context, req) {
  const date = "2022-11-24T09:10:26.563Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

