module.exports = async function (context, req) {
  const date = "2022-10-14T06:02:02.039Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

