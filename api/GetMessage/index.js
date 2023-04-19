module.exports = async function (context, req) {
  const date = "2023-04-19T23:09:05.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

