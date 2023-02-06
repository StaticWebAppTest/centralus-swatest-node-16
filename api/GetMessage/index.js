module.exports = async function (context, req) {
  const date = "2023-02-06T09:10:18.427Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

