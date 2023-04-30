module.exports = async function (context, req) {
  const date = "2023-04-30T06:11:21.757Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

