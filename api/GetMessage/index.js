module.exports = async function (context, req) {
  const date = "2023-11-14T09:09:02.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

