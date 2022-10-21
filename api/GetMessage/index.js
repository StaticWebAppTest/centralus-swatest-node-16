module.exports = async function (context, req) {
  const date = "2022-10-21T13:52:00.455Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

