module.exports = async function (context, req) {
  const date = "2022-04-28T04:04:42.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

