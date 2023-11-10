module.exports = async function (context, req) {
  const date = "2023-11-10T09:08:47.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

