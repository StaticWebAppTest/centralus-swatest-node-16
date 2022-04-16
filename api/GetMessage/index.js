module.exports = async function (context, req) {
  const date = "2022-04-16T04:13:02.979Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

