module.exports = async function (context, req) {
  const date = "2022-04-04T04:12:45.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

