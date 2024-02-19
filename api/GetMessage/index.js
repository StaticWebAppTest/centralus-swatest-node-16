module.exports = async function (context, req) {
  const date = "2024-02-19T11:07:41.653Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

