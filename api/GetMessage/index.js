module.exports = async function (context, req) {
  const date = "2023-08-08T18:11:45.346Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

