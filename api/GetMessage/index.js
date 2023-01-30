module.exports = async function (context, req) {
  const date = "2023-01-30T06:13:05.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

