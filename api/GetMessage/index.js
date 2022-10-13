module.exports = async function (context, req) {
  const date = "2022-10-13T13:51:23.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

