module.exports = async function (context, req) {
  const date = "2022-04-10T09:09:52.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

