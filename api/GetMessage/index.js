module.exports = async function (context, req) {
  const date = "2024-11-17T14:10:10.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

