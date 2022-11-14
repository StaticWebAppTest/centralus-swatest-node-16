module.exports = async function (context, req) {
  const date = "2022-11-14T06:15:18.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

