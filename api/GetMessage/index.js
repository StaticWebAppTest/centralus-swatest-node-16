module.exports = async function (context, req) {
  const date = "2024-07-04T09:11:21.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

