module.exports = async function (context, req) {
  const date = "2022-09-26T16:18:10.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

