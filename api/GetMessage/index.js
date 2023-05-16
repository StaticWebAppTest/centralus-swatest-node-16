module.exports = async function (context, req) {
  const date = "2023-05-16T08:11:22.777Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

