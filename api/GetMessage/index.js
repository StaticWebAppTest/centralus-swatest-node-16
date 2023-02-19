module.exports = async function (context, req) {
  const date = "2023-02-19T18:11:07.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

