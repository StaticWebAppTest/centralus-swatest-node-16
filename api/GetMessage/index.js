module.exports = async function (context, req) {
  const date = "2024-12-10T04:15:33.390Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

