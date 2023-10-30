module.exports = async function (context, req) {
  const date = "2023-10-30T13:11:12.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

