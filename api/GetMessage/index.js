module.exports = async function (context, req) {
  const date = "2022-04-23T23:10:37.914Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

