module.exports = async function (context, req) {
  const date = "2023-06-28T05:09:53.853Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

