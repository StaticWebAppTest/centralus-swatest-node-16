module.exports = async function (context, req) {
  const date = "2022-10-10T07:31:40.870Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

