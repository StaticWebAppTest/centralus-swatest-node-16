module.exports = async function (context, req) {
  const date = "2023-02-12T05:09:10.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

