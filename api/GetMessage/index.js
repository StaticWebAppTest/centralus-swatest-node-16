module.exports = async function (context, req) {
  const date = "2023-09-28T15:09:18.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

