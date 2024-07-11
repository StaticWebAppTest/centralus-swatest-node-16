module.exports = async function (context, req) {
  const date = "2024-07-11T08:13:08.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

