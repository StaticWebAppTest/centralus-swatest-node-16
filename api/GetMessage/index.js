module.exports = async function (context, req) {
  const date = "2023-03-22T05:09:40.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

