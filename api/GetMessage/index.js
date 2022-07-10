module.exports = async function (context, req) {
  const date = "2022-07-10T09:09:52.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

