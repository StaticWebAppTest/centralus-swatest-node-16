module.exports = async function (context, req) {
  const date = "2022-10-01T01:24:28.277Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

