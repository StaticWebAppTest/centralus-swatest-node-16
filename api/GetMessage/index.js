module.exports = async function (context, req) {
  const date = "2023-02-18T09:09:01.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

