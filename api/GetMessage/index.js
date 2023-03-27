module.exports = async function (context, req) {
  const date = "2023-03-27T05:09:13.853Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

