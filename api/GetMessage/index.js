module.exports = async function (context, req) {
  const date = "2023-02-11T05:08:40.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

