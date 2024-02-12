module.exports = async function (context, req) {
  const date = "2024-02-12T04:11:23.209Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

