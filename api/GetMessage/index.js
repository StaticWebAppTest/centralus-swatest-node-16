module.exports = async function (context, req) {
  const date = "2022-11-13T11:09:45.440Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

