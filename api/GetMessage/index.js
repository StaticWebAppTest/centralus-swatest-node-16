module.exports = async function (context, req) {
  const date = "2023-02-28T12:19:23.182Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

