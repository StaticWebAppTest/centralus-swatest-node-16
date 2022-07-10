module.exports = async function (context, req) {
  const date = "2022-07-10T11:08:23.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

