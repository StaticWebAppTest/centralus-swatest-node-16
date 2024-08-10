module.exports = async function (context, req) {
  const date = "2024-08-10T07:09:06.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

