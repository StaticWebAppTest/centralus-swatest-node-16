module.exports = async function (context, req) {
  const date = "2022-10-17T01:21:31.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

