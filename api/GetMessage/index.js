module.exports = async function (context, req) {
  const date = "2023-05-08T23:09:20.776Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

