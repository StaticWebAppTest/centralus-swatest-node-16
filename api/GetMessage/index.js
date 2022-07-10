module.exports = async function (context, req) {
  const date = "2022-07-10T03:26:16.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

