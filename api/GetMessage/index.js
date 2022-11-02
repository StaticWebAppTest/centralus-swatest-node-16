module.exports = async function (context, req) {
  const date = "2022-11-02T09:12:06.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

