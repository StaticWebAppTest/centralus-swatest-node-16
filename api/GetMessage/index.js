module.exports = async function (context, req) {
  const date = "2023-03-28T15:10:18.920Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

