module.exports = async function (context, req) {
  const date = "2023-07-16T04:11:07.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

