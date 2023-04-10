module.exports = async function (context, req) {
  const date = "2023-04-10T04:10:49.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

